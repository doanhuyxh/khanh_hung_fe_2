import dynamic from "next/dynamic";
import Tiptap from "./Tiptap";
const EditorCkeditor = dynamic(() => import("./CkEditor"), { ssr: false });
const EditorReactQuill = dynamic(() => import("./ReactQuill"), { ssr: false });

export { Tiptap, EditorCkeditor, EditorReactQuill }