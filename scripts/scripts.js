 function handleMouseMove(event) {
            const body = document.body;
            const mouseX = event.clientX;
            const windowWidth = mouseX/ window.innerWidth;
            const opacity = mouseX / windowWidth;

            if (mouseX > windowWidth / 2) {
            body.style.backgroundImage = `url('images/image2.jpg')`;
            body.style.backgroundPosition = `${((mouseX - windowWidth / 2) * 100 / (windowWidth / 2))}% 0%`;
        } else {
            body.style.backgroundImage = `url('images/image1.jpg')`;
            body.style.backgroundPosition = `center`;
        }
        body.style.backgroundRepeat = `no-repeat`;
        body.style.backgroundSize = `cover`;
        body.style.backgroundPosition = `center`;
    }