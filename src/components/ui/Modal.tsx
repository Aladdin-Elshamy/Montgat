import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import { memo, ReactNode } from 'react'

interface IProps{
  title?:string
  description?:string
  isOpen:boolean
  close:() => void
  children:ReactNode
}
function Modal({title,description,isOpen,close,children}: IProps) {


  return (
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 border"
            >
              {title && <DialogTitle as="h3" className="text-xl font-medium text-black">
                {title}
              </DialogTitle>}
              {description ? <p className="mt-4 text-gray-500">{description}</p> : null}
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}
export default memo(Modal)
