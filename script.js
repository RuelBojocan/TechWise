const header = document.querySelector("header");
        let hideTimer;

        function showNavbar() {
            header.classList.remove("header-hidden");

            clearTimeout(hideTimer);

            // Only auto-hide if not at the top
            if (window.scrollY > 100) {
                hideTimer = setTimeout(() => {
                    header.classList.add("header-hidden");
                }, 1000);
            }
        }

        // User interactions
        window.addEventListener("scroll", showNavbar);
        window.addEventListener("mousemove", showNavbar);
        window.addEventListener("touchstart", showNavbar);

        // When returning to the top, always show navbar
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 100) {
                clearTimeout(hideTimer);
                header.classList.remove("header-hidden");
            }
        });

        // Initial state
        showNavbar();