import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer>
      <div class={"banner"}>
        <a
          href="https://www.builder.io/"
          target="_blank"
          class="
            text-white block text-sm text-center 
            hover:text-light-blue decoration-none
            "
        >
          <span>Made with ♡ by Builder.io</span>
        </a>
      </div>
    </footer>
  );
});
