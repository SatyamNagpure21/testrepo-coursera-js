document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Control Logic ---
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    const openModal = () => { modal.style.display = 'flex'; };
    const closeModal = () => { modal.style.display = 'none'; };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- OTP Form Logic ---
    const phoneInputSection = document.getElementById('phone-input-section');
    const otpInputSection = document.getElementById('otp-input-section');
    
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');

    const phoneNumberInput = document.getElementById('phoneNumber');
    const otpInput = document.getElementById('otp');
    const message = document.getElementById('message');

    sendOtpBtn.addEventListener('click', () => {
        const phoneNumber = phoneNumberInput.value;
        if (phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber)) {
            // In a real app, you would call your backend here to send the OTP.
            console.log(`Sending OTP to ${phoneNumber}...`);
            
            // Switch to the OTP input view
            phoneInputSection.classList.add('hidden');
            otpInputSection.classList.remove('hidden');
            message.textContent = `An OTP was sent to ${phoneNumber}.`;
            message.style.color = 'green';
        } else {
            message.textContent = 'Please enter a valid 10-digit phone number.';
            message.style.color = 'red';
        }
    });

    verifyOtpBtn.addEventListener('click', () => {
        const otp = otpInput.value;
        if (otp.length === 6 && /^\d{6}$/.test(otp)) {
            // In a real app, you would call your backend here to verify the OTP.
            console.log(`Verifying OTP ${otp}...`);
            
            // For demonstration, we'll use a fake OTP.
            if (otp === "123456") {
                 message.textContent = 'Login Successful!';
                 message.style.color = 'green';
                 // Optionally, close the modal after 1-2 seconds
                 setTimeout(closeModal, 1500);
            } else {
                 message.textContent = 'Invalid OTP. Please try again.';
                 message.style.color = 'red';
            }
        } else {
            message.textContent = 'Please enter a valid 6-digit OTP.';
            message.style.color = 'red';
        }
    });
});

