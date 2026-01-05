// src/app/mod/templateRegistry.ts
//
// Developed with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { SpaceType, SpaceTypeConfig, TemplateVariant } from '../../types';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export class TemplateRegistry {

        // ┌──────────────────────────────── INIT ──────────────────────────────┐

            private static readonly TEMPLATES: Record<SpaceType, SpaceTypeConfig> = {
                lib: {
                    type: 'lib',
                    defaultTemplate: 'clean',
                    templates: [
                        {
                            name: 'clean',
                            label: 'Clean Library',
                            description: 'Zero dependencies - just TypeScript and build tools',
                            repo: 'lib',
                            requiresSetup: false,
                            ready: true
                        }
                    ]
                },

                server: {
                    type                    : 'server',
                    defaultTemplate         : 'clean',
                    templates               : [
                        {
                            name            : 'clean',
                            label           : 'Clean Server',
                            description     : 'Comes with @minejs/server library for quick server development',
                            repo            : 'server',
                            deps            : ['@minejs/server'],
                            requiresSetup   : true,
                            ready           : true
                        },
                    ]
                },

                cli: {
                    type: 'cli',
                    defaultTemplate: 'clean',
                    templates: [
                        {
                            name: 'clean',
                            label: 'Clean CLI',
                            description: 'Comes with @minejs/cli library for quick CLI development',
                            repo: 'cli',
                            deps: ['@minejs/cli'],
                            requiresSetup: true,
                            ready: true
                        }
                    ]
                },

                app: {
                    type: 'app',
                    defaultTemplate: 'clean',
                    templates: [
                        {
                            name: 'clean',
                            label: 'Clean Web App',
                            description: 'Comes with @cruxjs framework for quick web development',
                            repo: 'app',
                            deps: ['@cruxjs/app'],
                            requiresSetup: true,
                            ready: true
                        },
                    ]
                },
            };

        // └────────────────────────────────────────────────────────────────────┘


        // ┌──────────────────────────────── MAIN ──────────────────────────────┐

            /**
             * Get all templates for a space type
             */
            static getTemplatesForType(type: SpaceType, includeUnready: boolean = false): SpaceTypeConfig['templates'] {
                const templates = this.TEMPLATES[type]?.templates || [];
                return includeUnready ? templates : templates.filter(t => t.ready);
            }

            /**
             * Get only ready templates for a space type
             */
            static getReadyTemplatesForType(type: SpaceType): SpaceTypeConfig['templates'] {
                return this.getTemplatesForType(type, false);
            }

            /**
             * Get default template for a space type
             */
            static getDefaultTemplate(type: SpaceType): TemplateVariant {
                const templates = this.TEMPLATES[type];
                if (!templates) return 'clean';

                // Try to find a ready template that matches the default
                const defaultTemplate = templates.templates.find(
                    t => t.name === templates.defaultTemplate && t.ready
                );

                if (defaultTemplate) {
                    return defaultTemplate.name;
                }

                // Fallback to first ready template
                const firstReady = templates.templates.find(t => t.ready);
                return firstReady?.name || templates.defaultTemplate;
            }

            /**
             * Get template configuration
             */
            static getTemplate(type: SpaceType, template: TemplateVariant) {
                const typeConfig = this.TEMPLATES[type];
                if (!typeConfig) return null;

                return typeConfig.templates.find(t => t.name === template);
            }

            /**
             * Check if template is ready for use
             */
            static isTemplateReady(type: SpaceType, template: TemplateVariant): boolean {
                const config = this.getTemplate(type, template);
                return config?.ready || false;
            }

            /**
             * Validate template variant for a space type
             */
            static isValidTemplate(type: SpaceType, template: TemplateVariant): boolean {
                const templates = this.getTemplatesForType(type);
                return templates.some(t => t.name === template);
            }

            /**
             * Get repository name for a template
             */
            static getRepoName(type: SpaceType, template: TemplateVariant): string {
                const config = this.getTemplate(type, template);
                return config?.repo || 'ready-lib';
            }

            /**
             * Get all space types
             */
            static getSpaceTypes(): SpaceType[] {
                return Object.keys(this.TEMPLATES) as SpaceType[];
            }

        // └────────────────────────────────────────────────────────────────────┘

    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝