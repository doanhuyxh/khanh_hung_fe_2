'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import { ImageUpload, VideoUpload } from '@/app/components/FileHandle'
import { useState } from 'react'

const Tiptap = ({ value = '' }) => {
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [showVideoUpload, setShowVideoUpload] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto'
        }
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: value,
    // onUpdate: ({ editor }) => {
    //   //onChange(editor.getHTML())
    // }
  })

  const handleImageUpload = (imageUrl: string) => {
    if (editor) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
    }
    setShowImageUpload(false)
  }

  const handleVideoUpload = (videoUrl: string) => {
    if (editor) {
      editor.chain().focus().insertContent(`
        <video controls>
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
          ${value}
        </video>
      `).run()
    }
    setShowVideoUpload(false)
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="mb-4 flex gap-2">
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setShowImageUpload(true)}
        >
          Chèn ảnh
        </button>
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setShowVideoUpload(true)}
        >
          Chèn video
        </button>
      </div>

      <EditorContent editor={editor} value={value} />

      {showImageUpload && (
        <div className="mt-4">
          <ImageUpload initialLink={value} onChange={handleImageUpload} />
        </div>
      )}

      {showVideoUpload && (
        <div className="mt-4">
          <VideoUpload initialLink={value} onChange={handleVideoUpload} />
        </div>
      )}
    </div>
  )
}

export default Tiptap
