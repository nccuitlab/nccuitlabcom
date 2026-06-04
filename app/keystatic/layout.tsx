import KeystaticApp from './keystatic';
import { SaveToast } from './save-toast';

export default function RootLayout() {
  return (
    <>
      <KeystaticApp />
      <SaveToast />
    </>
  );
}
