import Section from './Section';
import Button from './Button';

const Login = () => {
  return (
    <Section
      id="logon"
      className="scroll-mt-24 bg-secondary-bg"
      costumPadding="py-10 px-5 md:px-10 lg:py-20 xl:py-24">
      <div className="container relative max-w-lg mx-auto">
        <div
          className="relative rounded-2xl border border-stone/15 bg-white p-8 shadow-[0_24px_80px_-24px_rgba(16,18,16,0.12)] md:p-10
            before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:ring-1 before:ring-inset before:ring-stone/8">
          <div className="relative">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-stone-600/90">
              Homifest Industry
            </p>
            <h2 className="text-2xl !font-semibold !tracking-tight !text-secondary-h md:!text-3xl !my-3 !max-w-none">
              Masuk ke akun Anda
            </h2>
            <p className="mb-8 text-center text-[15px] leading-relaxed text-secondary-h/75">
              Kelola portofolio properti dan akses penawaran eksklusif dalam satu tempat.
            </p>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
              noValidate>
              <div className="space-y-1.5">
                <label htmlFor="login-email" className="text-sm font-medium text-secondary-h">
                  Email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-stone/25 bg-stone-100/40 px-4 py-3 text-[15px] text-secondary-h outline-none transition-[border-color,box-shadow] placeholder:text-secondary-h/40 focus:border-green-500/60 focus:bg-white focus:ring-2 focus:ring-green-500/25"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="login-password" className="text-sm font-medium text-secondary-h">
                    Kata sandi
                  </label>
                  <a
                    href="#logon"
                    className="text-xs font-medium text-stone-600 underline-offset-2 hover:text-blue hover:underline">
                    Lupa sandi?
                  </a>
                </div>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-stone/25 bg-stone-100/40 px-4 py-3 text-[15px] text-secondary-h outline-none transition-[border-color,box-shadow] placeholder:text-secondary-h/35 focus:border-green-500/60 focus:bg-white focus:ring-2 focus:ring-green-500/25"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 select-none">
                <input
                  type="checkbox"
                  name="remember"
                  className="size-4 rounded border-stone/40 text-green-500 focus:ring-green-500/30"
                />
                <span className="text-sm text-secondary-h/80">Ingat saya di perangkat ini</span>
              </label>

              <div className="pt-1">
                <Button color="green" width="w-full">
                  Masuk
                </Button>
              </div>
            </form>

            <p id="register" className="mt-8 scroll-mt-24 text-center text-sm text-secondary-h/70">
              Belum punya akun?{' '}
              <a
                href="#register"
                className="font-semibold text-stone-600 underline-offset-2 hover:text-blue hover:underline">
                Daftar sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Login;
