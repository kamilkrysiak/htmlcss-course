console.log("working");

const usersRemarksForm = document.querySelector(".users_remarks");
const usersRemarksInput = document.querySelector(".users_remarks_input");

usersRemarksForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const remarksValue = usersRemarksInput.value;
  usersRemarksInput.value = "";
  //jesli dane z formularza były OK (tzn spełniały nasze załozenia), np
  // uzytkownik podałby wszytskie wymagane informacje, to w tym miejscu
  // JS po walidacji danych moglby podjac decyzje o wyslaniu danych na
  // wskazane przez developera np. REST API

  //to RESP API odbeira dane i robi z nimi to, co ma w sobie pod danym endpointem zlecone z nimi zrobić
});
