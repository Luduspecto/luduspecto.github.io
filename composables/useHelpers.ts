export function useHelpers() {
    const isMobileMenuDisplayedMenu = useState<boolean>('isMobileMenuDisplayedMenu', () => false);

    function toggleMobileMenu(state: boolean | undefined = undefined): void {
        isMobileMenuDisplayedMenu.value = state ?? !isMobileMenuDisplayedMenu.value;
    }

    return {
        toggleMobileMenu
    }
}

