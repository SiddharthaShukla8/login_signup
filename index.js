// // let signup = document.querySelector(".signup");
// // let login = document.querySelector(".login");
// // let slider = document.querySelector(".slider");
// // let formSection = document.querySelector(".form-section");

// // signup.addEventListener("click", () => {
// //     slider.classList.add("moveslider");
// //     formSection.classList.add("form-section-move");
// // });

// // login.addEventListener("click", () => {
// //     slider.classList.remove("moveslider");
// //     formSection.classList.remove("form-section-move");
// // });

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// document.addEventListener("DOMContentLoaded", () => {
//     const formTitle = document.getElementById("form-title");
//     const authForm = document.getElementById("auth-form");
//     const toggleText = document.querySelector(".toggle-text");
//     const toggleForm = document.getElementById("toggle-form");

//     let isLogin = true;

//     toggleForm.addEventListener("click", (event) => {
//         event.preventDefault();
//         isLogin = !isLogin;

//         if (isLogin) {
//             formTitle.textContent = "Login";
//             authForm.querySelector(".btn").textContent = "Login";
//             toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`;
//         } else {
//             formTitle.textContent = "Sign Up";
//             authForm.querySelector(".btn").textContent = "Sign Up";
//             toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-form">Login</a>`;
//         }
//     });

//     document.getElementById("google-signin").addEventListener("click", () => {
//         auth.signInWithPopup(provider)
//             .then((result) => {
//                 const user = result.user;
//                 alert(`Welcome, ${user.displayName}!`);
//                 console.log(user);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     });
// });












const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleText = document.querySelector(".toggle-text");

    let isLogin = true;

    // Event delegation for form toggle
    toggleText.addEventListener("click", (event) => {
        if (event.target.id === "toggle-form") {
            event.preventDefault();
            isLogin = !isLogin;

            formTitle.textContent = isLogin ? "Login" : "Sign Up";
            authForm.querySelector(".btn").textContent = isLogin ? "Login" : "Sign Up";
            toggleText.innerHTML = isLogin
                ? `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`
                : `Already have an account? <a href="#" id="toggle-form">Login</a>`;
        }
    });

    // Google Sign-In
    document.getElementById("google-signin").addEventListener("click", () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                alert(`Welcome, ${user.displayName}!`);
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
