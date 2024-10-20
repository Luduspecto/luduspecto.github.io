<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Verschicken...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          console.log(json.message);
          result.innerHTML = "Danke für Ihr Feedback!";
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          console.log(json.message);
          result.innerHTML = "Ups! Das hat leider nicht geklappt";
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Ups! Etwas hat nicht geklappt";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input type="hidden" name="access_key" value="2e481454-8352-4777-8858-6614cc567126" />
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <input
        type="text"
        placeholder="Name"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-tertiary rounded-md outline-none focus:ring-4 border-tertiary focus:border-primary ring-gray-100"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Bitte geben sie Ihren Namen an
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Adresse</label
      ><input
        id="email_address"
        type="email"
        placeholder="Email Adresse"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-tertiary rounded-md outline-none focus:ring-4 border-tertiary focus:border-primary ring-gray-100"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Bitte geben Sie ihre Email Adresse an.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Bitte geben Sie eine richtige Email Adresse ein.
      </div>
    </div>
    <div class="mb-3">
      <textarea
        name="message"
        required
        placeholder="Ihre Nachricht"
        class="w-full px-4 py-3 border-2 placeholder:text-tertiary rounded-md outline-none h-36 focus:ring-4 border-tertiary focus:border-primary ring-gray-100"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Bitte geben Sie eine Nachricht ein.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Nachricht senden</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
