import React, { useRef } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

const EmailE = () => {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    
    // Ghi đè callback upload ảnh
    unlayer.registerCallback('image', function (file, done) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64Image = event?.target?.result;
        done({ progress: 100, url: base64Image }); // Chèn ảnh base64 vào editor
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};

export default EmailE;
