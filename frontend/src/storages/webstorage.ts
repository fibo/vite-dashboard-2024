const itemKeys = ["authenticationToken", "rememberAccount"] as const;

type ItemKey = (typeof itemKeys)[number];

const itemKey: Record<ItemKey, (...args: any[]) => string> = {
  authenticationToken: () => "authenticationToken:v1",
  rememberAccount: () => "rememberAccount:v1",
};

export class LocalWebStorage {
  clear() {
    localStorage.clear();
  }

  get authenticationToken(): string | null {
    return localStorage.getItem(itemKey.authenticationToken());
  }

  set authenticationToken(value: string) {
    localStorage.setItem(itemKey.authenticationToken(), value);
  }

  get rememberAccount(): boolean {
    return localStorage.getItem(itemKey.rememberAccount()) === "true";
  }

  set rememberAccount(value: unknown) {
    localStorage.setItem(itemKey.rememberAccount(), value ? "true" : "false");
  }
}

export const localWebStorage = new LocalWebStorage();
