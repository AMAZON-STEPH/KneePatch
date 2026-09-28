
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let countdownTime = 24 * 60 * 60;


function updateTimer() {

    const hours = Math.floor(countdownTime / 3600);

    const minutes = Math.floor(
        (countdownTime % 3600) / 60
    );

    const seconds = countdownTime % 60;


    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");


    if (countdownTime > 0) {
        countdownTime--;
    } else {
        countdownTime = 24 * 60 * 60;
    }
}


updateTimer();

setInterval(updateTimer, 1000);


const orderButtons =
    document.querySelectorAll(".order-btn");


orderButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const buttonText =
            button.textContent.toLowerCase();

        if (buttonText.includes("order")) {

            const orderSection =
                document.getElementById("order");

            if (orderSection) {

                orderSection.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }

    });

});


const orderForm =
    document.getElementById("orderForm");

const formMessage =
    document.getElementById("formMessage");


orderForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const selectedPackage =
        document.getElementById("package").value;


    if (!name || !phone || !address) {

        formMessage.textContent =
            "Please fill in all the required fields.";

        formMessage.className =
            "text-center mt-5 font-semibold text-red-600";

        return;
    }


    formMessage.textContent =
        `Thank you ${name}! Your ${selectedPackage} order has been received.`;

    formMessage.className =
        "text-center mt-5 font-semibold text-green-600";


    orderForm.reset();

});