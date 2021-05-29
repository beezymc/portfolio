import React, { useState } from 'react';
import styles from './contact.module.scss';

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    const error = {}
    error.name = !data.name;
    error.message = !data.message;
    error.email = !isValidEmail(data.email);
    setError(error);
    if(error.name || error.message || error.email) {
      event.preventDefault();
    } else {
      setSuccessMessage(true);
    }
  }

  const hasChanged = (event) => {
    setData({
       ...data, [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <div className={styles.contentTitle}>
        Contact Me:
      </div>
      {error.name && 
        <div className={styles.Error}>Please enter a name.</div>
      }
      {error.email && 
        <div className={styles.Error}>Please enter a valid email.</div>
      }
      {error.message && 
        <div className={styles.Error}>Please enter a message.</div>
      }
      {successMessage && 
        <div className={styles.successMessage}>Thank you for contacting me!</div>
      }
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xgerobgo"
          method="POST"
        >
          <div className={styles.inputsContainer}>
            <input
              className={styles.topInput}
              type="message"
              value={data.name}
              name="name"
              placeholder="Name"
              onChange={hasChanged}
            />
            <input
              className={styles.topInput}
              type="message"
              value={data.email}
              name="email"
              placeholder="Email"
              onChange={hasChanged}
            />
          </div>
          <textarea
            className={styles.bottomInput}
            type="message"
            value={data.message}
            name="message"
            placeholder="Message"
            onChange={hasChanged}
          />
          <button type="submit" className={styles.sendButton}>
              Get in Touch
          </button>
        </form>
      </div>
    </>
  );
}

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         name: "",
//         email: "",
//         message: ""
//       },
//       error: {
//         name: "",
//         email: "",
//         message: ""
//       }
//     };
//     this.onSubmit = this.onSubmit.bind(this);
//     this.hasChanged = this.hasChanged.bind(this);
//   }

//   onSubmit(event) {
//     const { data } = this.state;
//     const error = {
//       name: "",
//       email: "",
//       message: ""
//     }
//     error.name = data.name == "" ? "Cannot be blank" : "";
//     error.message = data.message == "" ? "Cannot be blank" : "";
//     error.email = isValidEmail(data.email) ? "" : "Not a valid email"

//     if(error.name || error.message || error.email) {
//       event.preventDefault();
//     }
//     this.setState({ error: error });
//   }

//   hasChanged(event) {
//     const { data } = this.state;
//     this.setState({
//       data: { ...data, [event.target.name]: event.target.value }
//     });
//   }

//   render() {
//     const { error, data } = this.state;

//     return (
//       <>
//         <div className={styles.contentTitle}>
//           Contact Me:
//         </div>
//         <div className={styles.formContainer}>
//           <form
//             onSubmit={this.onSubmit}
//             action="https://formspree.io/f/xgerobgo"
//             method="POST"
//           >
//             <div className={styles.inputsContainer}>
//             <input
//               className={styles.topInput}
//               type="message"
//               value={data.name}
//               name="name"
//               placeholder="Name"
//               onChange={this.hasChanged}
//             />
//             <input
//               className={styles.topInput}
//               type="message"
//               value={data.email}
//               name="email"
//               placeholder="Email"
//               onChange={this.hasChanged}
//             />
//             </div>
//             <textarea
//               className={styles.bottomInput}
//               type="message"
//               value={data.message}
//               name="message"
//               placeholder="Message"
//               onChange={this.hasChanged}
//             />
//             <button type="submit" className={styles.sendButton}>
//                 Get in Touch
//             </button>
//           </form>
//         </div>
//       </>
//     );
//   }
// }

export default Contact;


