import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaKiwiBird } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

export default function Popup({ ...props}) {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

    const handleCancelClick = () => {
      props.onClose();
      setOpen(false);
    }

    const handleConfirmClick = () => {
      props.onConfirm();
      setOpen(false);
    }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleCancelClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-primary px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FaKiwiBird className="h-8 w-8 text-white" 
                        data-tooltip-id="kiwi"
                        data-tooltip-content={'C\'est un kiwi et si tu te demande y\'a pas de raison juste il est trop mims'}/>
                            <Tooltip id="kiwi" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-accent">
                        Votre pari !
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-white">
                          Etes Vous sur de vouloir parier sur {props.team} ?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={handleConfirmClick}
                  >
                    Confirmer
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm sm:mt-0 sm:w-auto"
                    onClick={handleCancelClick}
                    ref={cancelButtonRef}
                  >
                    Annuler
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
