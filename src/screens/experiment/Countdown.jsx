import { useEffect } from "react";

function Countdown({ callback }) {
  useEffect(() => {
    const container = document.querySelector(".countdown");

    let countdown = 4;

    const timer = setInterval(() => {
      if (countdown > 0) {
        container.innerHTML = countdown;
      }
      countdown--;

      if (countdown < 0) {
        clearInterval(timer);
        callback();
      }
    }, 1000);
  }, [callback]);

  return <div className="countdown">5</div>;
}

export default Countdown;
