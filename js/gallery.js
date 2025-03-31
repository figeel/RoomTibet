let currentImageIndex = 0;
        const images = document.querySelectorAll('.gallery-image');
        const caption = document.getElementById('caption');
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            caption.textContent = `Фото ${index + 1} из ${images.length}`;
        }
        
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }
        
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }
        
        // Обработчики клавиатуры
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        });