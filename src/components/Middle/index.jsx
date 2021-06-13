import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../services/api";
import { Search, Button, Tag, Modal, FormModal } from './styles';

const Middle = () => {

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const notifySuccess = () => toast.success("Tool add with success!");
  const notifyError = () => toast.error("Error while adding tool");

  function openModal() {
    console.log('entra aqui')

    toggleModal();
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)

    var closemodal = document.querySelectorAll('.modal-close')
    for (var j = 0; j < closemodal.length; j++) {
      closemodal[j].addEventListener('click', toggleModal)
    }

    document.onkeydown = function (evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
        isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
      }
    };

  }
  var openmodal = document.querySelectorAll('.modal-open');
  for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function (event) {
      event.preventDefault()
      toggleModal();
    })
  }
  function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }

  const addTools = async (e) => {
    try {
      e.preventDefault();

      const splitTags = tags.split(" ");
      const response = await api.post("/tools", {
        title,
        link,
        description,
        tags: splitTags,
      });

      if (response.status === 201) {
        notifySuccess();
        console.log("Tool created with sucessfuly");
      }

    } catch (e) {
      notifyError();
      console.log(e)
    }

    setTitle('');
    setLink('');
    setDescription('');
    setTags('');

  }

  return (
    <div className="flex justify-between">

      <ToastContainer />

      <div className="my-1 ml-3">
        <Search className="border-2 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:ring-2" type="text" placeholder="Buscar..." />

        <Tag>
          <input type="checkbox" className="ml-2 w-4 h-4" />
          <span className="ml-2 tags">Buscar apenas nas Tags</span>
        </Tag>

      </div>

      <Button type="button" onClick={() => openModal()} className="modal-open mx-auto lg:mx-4 font-extrabold focus:outline-none rounded my-1 mr-3 md:my-1 py-2 px-8 shadow-lg w-48 text-sm ml-1">Add Tool</Button>

      <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-3xl max-w- mx-auto rounded shadow-lg z-50 overflow-y-auto">

          <Modal className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Add New Tool</p>
              <div className="modal-close cursor-pointer z-50">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            <FormModal onSubmit={addTools}>
              <div className="mb-4">
                <label className="text-xl">Title <span className="text-red-500">*</span></label>
                <input type="text" className="border-2 p-2 w-full rounded-lg" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="mb-4">
                <label className="text-xl">Link <span className="text-red-500">*</span></label>
                <input type="text" className="border-2 p-2 w-full rounded-lg" value={link} onChange={(e) => setLink(e.target.value)} />
              </div>

              <div className="mb-4">
                <label className="text-xl text-gray-600">Description <span className="text-red-500">*</span></label>
                <textarea rows="5" className="w-full px-3 py-2 border-2 rounded-lg" value={description} onChange={(e) => setDescription(e.target.value)} >
                </textarea>
              </div>

              <div className="mb-4">
                <label className="text-xl">Tags <span className="text-red-500">*</span></label>
                <input type="text" className="border-2 p-2 w-full rounded-lg" value={tags}onChange={(e) => setTags(e.target.value)} />
              </div>

              <div className="flex justify-end pt-2">
                <button type="submit" className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Action</button>
              </div>
            </FormModal>
          </Modal>
        </div>
      </div>


    </div >
  );
}

export default Middle;