/**
 * MARIANNE - IA Républicaine
 * Application JavaScript principale
 * Conforme aux standards d'accessibilité RGAA
 */

class MarianneApp {
    constructor() {
        this.currentPage = 'login';
        this.messageInput = null;
        this.loginPage = null;
        this.mainInterface = null;
        
        this.init();
    }

    /**
     * Initialisation de l'application
     */
    init() {
        this.setupElements();
        this.setupEventListeners();
        this.setupAccessibility();
    }

    /**
     * Configuration des éléments DOM
     */
    setupElements() {
        this.loginPage = document.getElementById('login-page');
        this.mainInterface = document.getElementById('main-interface');
        this.messageInput = document.getElementById('message-input');
    }

    /**
     * Configuration des écouteurs d'événements
     */
    setupEventListeners() {
        // Écouteur pour la navigation au clavier
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
        
        // Écouteur pour le formulaire principal
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    /**
     * Configuration de l'accessibilité
     */
    setupAccessibility() {
        // Amélioration de la navigation au clavier
        this.setupKeyboardNavigation();
        
        // Amélioration des focus
        this.setupFocusManagement();
    }

    /**
     * Gestion de la navigation au clavier
     */
    setupKeyboardNavigation() {
        // Navigation entre les pages avec Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.handleEscapeKey();
            }
        });
    }

    /**
     * Gestion du focus pour l'accessibilité
     */
    setupFocusManagement() {
        // Focus automatique sur l'input après connexion
        if (this.messageInput) {
            this.messageInput.addEventListener('focus', () => {
                this.messageInput.setAttribute('aria-describedby', 'input-description');
            });
        }
    }

    /**
     * Gestion de la touche Échap
     */
    handleEscapeKey() {
        if (this.currentPage === 'main') {
            this.showLoginPage();
        }
    }

    /**
     * Gestion de la navigation au clavier
     */
    handleKeyboardNavigation(e) {
        // Navigation avec Tab
        if (e.key === 'Tab') {
            this.handleTabNavigation(e);
        }
        
        // Navigation avec Entrée
        if (e.key === 'Enter') {
            this.handleEnterKey(e);
        }
    }

    /**
     * Gestion de la navigation Tab
     */
    handleTabNavigation(e) {
        // Logique pour gérer le focus dans l'ordre logique
        const focusableElements = this.getFocusableElements();
        const currentIndex = focusableElements.indexOf(document.activeElement);
        
        if (e.shiftKey) {
            // Navigation vers l'arrière
            if (currentIndex <= 0) {
                e.preventDefault();
                focusableElements[focusableElements.length - 1].focus();
            }
        } else {
            // Navigation vers l'avant
            if (currentIndex >= focusableElements.length - 1) {
                e.preventDefault();
                focusableElements[0].focus();
            }
        }
    }

    /**
     * Gestion de la touche Entrée
     */
    handleEnterKey(e) {
        if (e.target.classList.contains('marianne-btn')) {
            e.preventDefault();
            this.handleButtonClick(e.target.textContent.trim());
        }
    }

    /**
     * Récupération des éléments focusables
     */
    getFocusableElements() {
        return Array.from(document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )).filter(el => !el.classList.contains('hidden'));
    }

    /**
     * Affichage de la page de connexion
     */
    showLoginPage() {
        this.currentPage = 'login';
        this.loginPage.classList.remove('hidden');
        this.mainInterface.classList.add('hidden');
        
        // Mise à jour de l'accessibilité
        this.updateAriaLabels('login');
    }

    /**
     * Affichage de l'interface principale
     */
    showMainInterface() {
        this.currentPage = 'main';
        this.loginPage.classList.add('hidden');
        this.mainInterface.classList.remove('hidden');
        
        // Focus sur l'input de message
        if (this.messageInput) {
            this.messageInput.focus();
        }
        
        // Mise à jour de l'accessibilité
        this.updateAriaLabels('main');
    }

    /**
     * Gestion du clic sur les boutons d'action
     */
    handleButtonClick(text) {
        if (this.messageInput) {
            this.messageInput.value = text;
            this.messageInput.focus();
            
            // Simulation de la soumission du formulaire
            this.handleSubmit(new Event('submit'));
        }
    }

    /**
     * Gestion de la soumission du formulaire
     */
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.messageInput && this.messageInput.value.trim()) {
            this.processUserMessage(this.messageInput.value.trim());
        }
    }

    /**
     * Traitement du message utilisateur
     */
    processUserMessage(message) {
        // Simulation de la réponse de l'IA
        console.log('Message utilisateur:', message);
        
        // Ici vous pouvez ajouter la logique de conversation
        // Pour le MVP, on simule une réponse
        this.simulateAIResponse(message);
    }

    /**
     * Simulation de la réponse de l'IA
     */
    simulateAIResponse(userMessage) {
        // Réponses simulées selon le type de demande
        const responses = {
            'payer mes impôts': 'Je vais vous guider pour le paiement de vos impôts. Pouvez-vous me préciser s\'il s\'agit d\'impôts sur le revenu ou d\'autres taxes ?',
            'demander un acte de naissance': 'Pour demander un acte de naissance, je vais vous rediriger vers le service en ligne. Avez-vous votre numéro de sécurité sociale ?',
            'prendre rendez-vous': 'Je peux vous aider à prendre rendez-vous. Quel type de rendez-vous souhaitez-vous ? (préfecture, mairie, service public...)',
            'créer mon entreprise': 'Pour créer votre entreprise, je vais vous accompagner dans les démarches. Quel type d\'entreprise souhaitez-vous créer ?',
            'questions juridiques simples': 'Je peux vous aider pour des questions juridiques simples. Pouvez-vous préciser votre question ?'
        };

        const lowerMessage = userMessage.toLowerCase();
        let response = 'Je comprends votre demande. Laissez-moi vous aider avec cela.';

        // Recherche de la réponse appropriée
        for (const [key, value] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                response = value;
                break;
            }
        }

        // Affichage de la réponse (pour le MVP)
        this.displayResponse(response);
    }

    /**
     * Affichage de la réponse
     */
    displayResponse(response) {
        // Pour le MVP, on affiche dans la console
        console.log('Réponse Marianne:', response);
        
        // Ici vous pourriez ajouter l'affichage dans l'interface
        // Par exemple, créer un élément de réponse
        this.createResponseElement(response);
    }

    /**
     * Création d'un élément de réponse
     */
    createResponseElement(response) {
        const responseContainer = document.createElement('div');
        responseContainer.className = 'marianne-response';
        responseContainer.setAttribute('role', 'status');
        responseContainer.setAttribute('aria-live', 'polite');
        
        responseContainer.innerHTML = `
            <div class="marianne-response-content">
                <p class="marianne-response-text">${response}</p>
            </div>
        `;
        
        // Insertion après le formulaire
        const form = document.querySelector('form');
        if (form && form.parentNode) {
            form.parentNode.insertBefore(responseContainer, form.nextSibling);
        }
    }

    /**
     * Mise à jour des labels d'accessibilité
     */
    updateAriaLabels(page) {
        const mainElement = page === 'login' ? this.loginPage : this.mainInterface;
        
        if (mainElement) {
            mainElement.setAttribute('aria-label', 
                page === 'login' 
                    ? 'Page de connexion Marianne' 
                    : 'Interface principale Marianne'
            );
        }
    }

    /**
     * Gestion des erreurs
     */
    handleError(error) {
        console.error('Erreur Marianne:', error);
        
        // Affichage d'un message d'erreur accessible
        this.displayError('Une erreur est survenue. Veuillez réessayer.');
    }

    /**
     * Affichage d'une erreur
     */
    displayError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'marianne-error';
        errorElement.setAttribute('role', 'alert');
        errorElement.setAttribute('aria-live', 'assertive');
        errorElement.textContent = message;
        
        // Insertion en haut de la page
        const container = document.querySelector('.marianne-container');
        if (container) {
            container.insertBefore(errorElement, container.firstChild);
        }
    }

    /**
     * Nettoyage de l'application
     */
    destroy() {
        // Suppression des écouteurs d'événements
        document.removeEventListener('keydown', this.handleKeyboardNavigation);
        
        // Nettoyage des éléments
        this.loginPage = null;
        this.mainInterface = null;
        this.messageInput = null;
    }
}

/**
 * Initialisation de l'application au chargement de la page
 */
document.addEventListener('DOMContentLoaded', () => {
    // Création de l'instance de l'application
    window.marianneApp = new MarianneApp();
    
    // Exposition des fonctions globales pour compatibilité
    window.showMainInterface = () => {
        window.marianneApp.showMainInterface();
    };
    
    window.handleButtonClick = (text) => {
        window.marianneApp.handleButtonClick(text);
    };
    
    window.handleSubmit = (e) => {
        window.marianneApp.handleSubmit(e);
    };
});

/**
 * Gestion de la fermeture de la page
 */
window.addEventListener('beforeunload', () => {
    if (window.marianneApp) {
        window.marianneApp.destroy();
    }
}); 