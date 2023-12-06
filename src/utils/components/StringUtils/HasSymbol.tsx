export const HasSymbol = (value: string) => {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
}