import { type FormEvent, useRef, useState } from "react";
import "../style/contact.css";

function Contact() {
  const [userData, setUserData] = useState<userDataI>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dialogRef.current?.showModal();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const data = {
      name,
      email,
      message,
    };
    setUserData(data);

    console.info(data);
  }

  return (
    <main className="container-central-contact">
      <section id="display-form">
        <header id="header-form">
          <h1 id="title-contact">Contacte-nous</h1>
          <p>-</p>
          <p>Des bonnes nouvelles à nous partager?</p>
          <p>Ecris-nous un message :&#41;</p>
        </header>

        <form onSubmit={handleSubmit} id="form-container">
          <section id="first-section">
            <label htmlFor="name">Prénom</label>
            <input
              type="text"
              placeholder="Ton p'tit nom mon mignon"
              name="name"
              required
            />
          </section>
          <section id="second-section">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="mail@mail.com"
              required
            />
          </section>
          <section id="third-section">
            <label htmlFor="message">Votre message</label>
            <textarea placeholder="Ton message" name="message" required />
          </section>
          <button type="submit" id="submit-form">
            Soumettre
          </button>
        </form>
        <dialog ref={dialogRef} id="dial-box">
          <section id="dialog-content">
            <section id="data">
              <p>{`Bonjour ${userData?.name} et merci pour ton message!`}</p>
              <p>
                {`Si ta news est validée, tu recevra une confirmation sur
            ${userData?.email}`}
              </p>
            </section>
            <button id="close-modal-button" type="button" onClick={handleClose}>
              X
            </button>
          </section>
        </dialog>
      </section>
    </main>
  );
}

export default Contact;
