


        function switchAdminTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.admin-tab-content').forEach(el => {
                el.classList.add('hidden');
            });
            // Reset all buttons
            document.querySelectorAll('.admin-tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-[#007aff]', 'shadow-sm');
                btn.classList.add('text-[#1d1d1f]', 'hover:bg-gray-200');
            });

            // Show target content
            document.getElementById(tabId).classList.remove('hidden');
            // Highlight target button
            const targetBtn = document.getElementById('btn-' + tabId);
            if (targetBtn) {
                targetBtn.classList.remove('text-[#1d1d1f]', 'hover:bg-gray-200');
                targetBtn.classList.add('bg-white', 'text-[#007aff]', 'shadow-sm');
            }
        }
        function showManual() {
            showModal('manualModal');
        }
        window.onerror = function (message, source, lineno, colno, error) {
            console.error(error);
            const mask = document.getElementById('loadingMask');
            if (mask) mask.classList.add('hidden');
        };
    