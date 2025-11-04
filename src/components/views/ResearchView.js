import { html, css, LitElement } from '../../assets/lit-core-2.7.4.min.js';

export class ResearchView extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :host {
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: none;
        }

        .research-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 20px;
        }

        .research-form {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            width: 100%;
        }

        .form-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .form-title {
            font-size: 24px;
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 8px;
        }

        .form-description {
            font-size: 16px;
            color: var(--text-secondary-color, rgba(255, 255, 255, 0.7));
        }

        .form-group {
            margin-bottom: 24px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-color);
        }

        .form-input {
            width: 100%;
            padding: 16px 20px;
            border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            border-radius: 8px;
            background: var(--input-background, rgba(0, 0, 0, 0.3));
            color: var(--text-color);
            font-size: 16px;
            transition: all 0.2s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--focus-border-color, #007aff);
            box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
        }

        .form-input::placeholder {
            color: var(--text-secondary-color, rgba(255, 255, 255, 0.5));
        }

        .submit-button {
            background: var(--start-button-background, #007aff);
            color: var(--start-button-color, white);
            border: 1px solid var(--start-button-border, #007aff);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            align-self: flex-start;
            min-width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .submit-button:hover {
            background: var(--start-button-hover-background, #0056b3);
            border-color: var(--start-button-hover-border, #0056b3);
        }

        .submit-button:disabled {
            background: var(--disabled-background, rgba(255, 255, 255, 0.1));
            color: var(--disabled-text-color, rgba(255, 255, 255, 0.5));
            cursor: not-allowed;
        }

        .loading {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text-color);
            font-size: 14px;
        }

        .loading-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
            border-top: 2px solid var(--focus-border-color, #007aff);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .results-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
            overflow-y: auto;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
            user-select: text !important;
        }

        .results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
        }

        .results-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-color);
        }

        .back-button {
            background: var(--button-background, rgba(255, 255, 255, 0.1));
            color: var(--text-color);
            border: 1px solid var(--button-border, rgba(255, 255, 255, 0.15));
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .back-button:hover {
            background: var(--button-hover-background, rgba(255, 255, 255, 0.15));
            border-color: var(--button-hover-border, rgba(255, 255, 255, 0.25));
        }

        .research-content {
            background: var(--card-background, rgba(255, 255, 255, 0.04));
            border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            border-radius: 8px;
            padding: 24px;
            line-height: 1.7;
            color: var(--text-color);
            font-size: 15px;
            flex: 1;
            overflow-y: auto;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            cursor: text;
        }

        /* Markdown styling for research content */
        .research-content h1,
        .research-content h2,
        .research-content h3,
        .research-content h4,
        .research-content h5,
        .research-content h6 {
            margin: 1.2em 0 0.6em 0;
            color: var(--text-color);
            font-weight: 600;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content h1 { font-size: 1.8em; }
        .research-content h2 { font-size: 1.5em; }
        .research-content h3 { font-size: 1.3em; }
        .research-content h4 { font-size: 1.1em; }
        .research-content h5 { font-size: 1em; }
        .research-content h6 { font-size: 0.9em; }

        .research-content p {
            margin: 0.8em 0;
            color: var(--text-color);
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content ul,
        .research-content ol {
            margin: 0.8em 0;
            padding-left: 2em;
            color: var(--text-color);
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content li {
            margin: 0.4em 0;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content blockquote {
            margin: 1em 0;
            padding: 0.5em 1em;
            border-left: 4px solid var(--focus-border-color, #007aff);
            background: rgba(0, 122, 255, 0.1);
            font-style: italic;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content code {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.85em;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content pre {
            background: var(--input-background, rgba(0, 0, 0, 0.3));
            border: 1px solid var(--button-border, rgba(255, 255, 255, 0.15));
            border-radius: 6px;
            padding: 1em;
            overflow-x: auto;
            margin: 1em 0;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content pre code {
            background: none;
            padding: 0;
            border-radius: 0;
        }

        .research-content strong,
        .research-content b {
            font-weight: 600;
            color: var(--text-color);
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content em,
        .research-content i {
            font-style: italic;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content hr {
            border: none;
            border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            margin: 2em 0;
        }

        .research-content table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
        }

        .research-content th,
        .research-content td {
            border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            padding: 0.5em;
            text-align: left;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content th {
            background: var(--input-background, rgba(0, 0, 0, 0.3));
            font-weight: 600;
        }

        .research-content h3 {
            color: var(--text-color);
            margin: 0 0 12px 0;
            font-size: 16px;
            font-weight: 600;
        }

        /* Ensure all elements within research content are selectable */
        .research-content * {
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }

        .research-content p {
            margin: 0 0 16px 0;
        }

        .research-content ul {
            margin: 0 0 16px 0;
            padding-left: 20px;
        }

        .research-content li {
            margin: 0 0 8px 0;
        }

        .error-message {
            background: var(--danger-background, rgba(239, 68, 68, 0.1));
            color: var(--danger-color, #ef4444);
            border: 1px solid var(--danger-border, rgba(239, 68, 68, 0.2));
            border-radius: 8px;
            padding: 16px;
            font-size: 14px;
            margin-bottom: 16px;
        }

        .url-display {
            background: var(--input-background, rgba(0, 0, 0, 0.3));
            border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            border-radius: 6px;
            padding: 12px 16px;
            color: var(--text-secondary-color, rgba(255, 255, 255, 0.7));
            font-size: 13px;
            word-break: break-all;
        }
    `;

    static properties = {
        onBackClick: { type: Function },
        onResearchSubmit: { type: Function },
        isLoading: { type: Boolean },
        researchResults: { type: String },
        errorMessage: { type: String },
        submittedUrl: { type: String },
    };

    constructor() {
        super();
        this.onBackClick = () => {};
        this.onResearchSubmit = () => {};
        this.isLoading = false;
        this.researchResults = '';
        this.errorMessage = '';
        this.submittedUrl = '';
    }

    handleUrlSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const url = formData.get('url').trim();
        
        if (!url) {
            this.errorMessage = 'Please enter a website URL';
            this.requestUpdate();
            return;
        }

        // Basic URL validation
        try {
            new URL(url);
        } catch {
            this.errorMessage = 'Please enter a valid URL (e.g., https://example.com)';
            this.requestUpdate();
            return;
        }

        this.errorMessage = '';
        this.submittedUrl = url;
        this.researchResults = '';
        
        this.onResearchSubmit(url);
    }

    clearResults() {
        this.researchResults = '';
        this.submittedUrl = '';
        this.isLoading = false;
        this.errorMessage = '';
        this.requestUpdate();
    }

    renderMarkdown(content) {
        // Check if marked is available
        if (typeof window !== 'undefined' && window.marked) {
            try {
                // Configure marked for better security and formatting
                window.marked.setOptions({
                    breaks: true,
                    gfm: true,
                    sanitize: false, // We trust the AI responses
                });
                const htmlContent = window.marked.parse(content);
                // Return as unsafe HTML for Lit template
                return html`<div .innerHTML=${htmlContent}></div>`;
            } catch (error) {
                console.warn('Error parsing markdown:', error);
                return html`<div>${content}</div>`; // Fallback to plain text
            }
        }
        console.log('Marked not available, using plain text');
        return html`<div>${content}</div>`; // Fallback if marked is not available
    }

    render() {
        if (this.isLoading) {
            return html`
                <div class="research-container">
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 24px; padding: 40px; max-width: 600px; margin: 0 auto;">
                        <div class="loading">
                            <div class="loading-spinner"></div>
                            <span>Researching website...</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (this.researchResults) {
            return html`
                <div class="research-container">
                    <div class="results-container">
                        <div class="results-header">
                            <div class="results-title">Research Results</div>
                            <div style="display: flex; gap: 8px;">
                                <button class="back-button" @click=${() => this.clearResults()}>
                                    New Research
                                </button>
                                <button class="back-button" @click=${this.onBackClick}>
                                    Back to Chat
                                </button>
                            </div>
                        </div>
                        
                        <div class="url-display">
                            ${this.submittedUrl}
                        </div>
                        
                        <div class="research-content">
                            ${this.renderMarkdown(this.researchResults)}
                        </div>
                    </div>
                </div>
            `;
        }

        return html`
            <div class="research-container">
                <div class="research-form">
                    <div class="form-header">
                        <h1 class="form-title">Website Research</h1>
                        <p class="form-description">Enter a website URL to get sales-oriented research and insights</p>
                    </div>
                    
                    <form @submit=${this.handleUrlSubmit}>
                        <div class="form-group">
                            <label for="url" class="form-label">Website URL</label>
                            <input 
                                type="url" 
                                id="url" 
                                name="url" 
                                class="form-input" 
                                placeholder="https://example.com"
                                required
                            />
                        </div>
                        
                        ${this.errorMessage ? html`
                            <div class="error-message">
                                ${this.errorMessage}
                            </div>
                        ` : ''}
                        
                        <button type="submit" class="submit-button">
                            Research Website
                        </button>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('research-view', ResearchView);


