'use client'



import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
         <FileItem key={file.name} name={file.name} size={file.size} />
        )
      })}
    </div>
  )
}
