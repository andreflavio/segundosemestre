declare module 'prompt-sync' {
    interface Prompt {
      (question?: string): string | undefined;
      hide(question?: string): string | undefined;
      history(name: string): { push(item: string): void; reset(): void; };
      setConfig(config: object): void;
    }
    const prompt: Prompt;
    export = prompt;
  }
  