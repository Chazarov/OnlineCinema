$(document).ready(hideElements('.main_navigation_unit', '.navigation_item'));
$(document).ready(hideElements('.banners', '.middle_banner'));
    
function hideElements(container, item) {
    const $mainNavUnit = $(container);
    const mainNavUnitRightEdge = $mainNavUnit.offset().left + $mainNavUnit.width();

    $mainNavUnit.find(item).each(function() {
        const $this = $(this);
        const itemRightEdge = $this.offset().left + $this.width();
        
        if (itemRightEdge > mainNavUnitRightEdge) {
            $this.css('display', 'none');
        }
    });
};

    
document.addEventListener('DOMContentLoaded',makeToltip)

function makeToltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.navigation_item').forEach(target => {
        target.addEventListener('mouseover', (e) => {
            const message = target.getAttribute('data-tooltip');
            tooltip.textContent = message;
            tooltip.style.zIndex = "100";


            const rect = target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 20}px`; // Adjust to position below the target
            tooltip.classList.add('visible');
        });

        target.addEventListener('mouseout', () => {
            tooltip.classList.remove('visible');
        });
    });
};





