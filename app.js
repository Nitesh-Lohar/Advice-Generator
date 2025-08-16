const url = "https://api.adviceslip.com/advice";
const btn = document.querySelector("#btn");
let adviceId=document.querySelector("#advice-id")
let advice=document.querySelector("#advice")

btn.addEventListener("click", async () => {
  let adviceObj = await genAdvice();
  adviceId.textContent="Advice #"+adviceObj.slip.id
  advice.textContent=`"${adviceObj.slip.advice}"`;
  console.log(advice)
});

async function genAdvice() {
  try {
    let res = await axios.get(url);
    let advice = res.data;
    return advice;
  } catch (e) {
    return e;
  }
}
