document.addEventListener('DOMContentLoaded', function () {
  let startModal = document.querySelector('.start-modal-container');
  //모달 온
  function startModalOpen() {
    const startBtn = document.querySelector('.start-btn');

    startBtn.addEventListener('click', function () {
      startModal.classList.add('active');
    });
  }

  startModalOpen();

  function closeModal() {
    const closeBtn = document.querySelectorAll('.close');

    closeBtn.forEach((i) => {
      i.addEventListener('click', function () {
        startModal.classList.remove('active');
      });
    });
  }
  closeModal();
});
