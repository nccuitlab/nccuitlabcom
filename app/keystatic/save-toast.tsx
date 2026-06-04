'use client';
import { useEffect, useRef, useState } from 'react';

type ToastState = { visible: boolean; success: boolean };

export function SaveToast() {
  const [toast, setToast] = useState<ToastState>({ visible: false, success: true });
  const isSavedRef = useRef(false);

  useEffect(() => {
    // Injected style to visually gray out the Save button after saving
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);

    const applyGray = () => {
      styleEl.textContent = `
        button[data-ks-saved] {
          opacity: 0.35 !important;
          filter: grayscale(1) !important;
          transition: opacity .2s, filter .2s !important;
        }
      `;
    };

    const clearGray = () => {
      styleEl.textContent = '';
    };

    const findSaveButton = (): HTMLButtonElement | null => {
      for (const btn of document.querySelectorAll<HTMLButtonElement>('button')) {
        if (btn.textContent?.trim() === 'Save') return btn;
      }
      return null;
    };

    const markSaved = () => {
      const btn = findSaveButton();
      if (btn) btn.setAttribute('data-ks-saved', 'true');
      applyGray();
      isSavedRef.current = true;
    };

    const markUnsaved = () => {
      document.querySelectorAll('[data-ks-saved]').forEach(el => el.removeAttribute('data-ks-saved'));
      clearGray();
      isSavedRef.current = false;
    };

    // Intercept fetch to detect saves
    const original = window.fetch;
    window.fetch = async function (...args) {
      const res = await original.apply(this, args);
      const url = args[0] instanceof Request ? args[0].url : String(args[0]);
      const method = (
        args[1]?.method ?? (args[0] instanceof Request ? args[0].method : 'GET')
      ).toUpperCase();

      if (url.includes('/api/keystatic/') && method === 'POST') {
        const success = res.ok;
        setToast({ visible: true, success });
        setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
        if (success) {
          markSaved();
          fetch('/api/revalidate', { method: 'POST' }).catch(() => null);
        }
      }
      return res;
    };

    // Any user edit in the form → restore Save button
    const onEdit = () => {
      if (isSavedRef.current) markUnsaved();
    };
    document.addEventListener('input', onEdit);
    document.addEventListener('keydown', onEdit);

    // Reset on page navigation (Keystatic is a SPA)
    const onNav = () => markUnsaved();
    window.addEventListener('popstate', onNav);

    return () => {
      window.fetch = original;
      document.removeEventListener('input', onEdit);
      document.removeEventListener('keydown', onEdit);
      window.removeEventListener('popstate', onNav);
      styleEl.remove();
    };
  }, []);

  if (!toast.visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        background: toast.success ? '#16a34a' : '#dc2626',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 600,
        zIndex: 99999,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
      }}
    >
      {toast.success ? '✓ 已儲存到 GitHub' : '✗ 儲存失敗，請重試'}
    </div>
  );
}
