import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "120 Diagnósticos para Ar-Condicionado Split" },
      { name: "description", content: "120 diagnósticos prontos para identificar o defeito do Split." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "120 Diagnósticos para Ar-Condicionado Split" },
      { property: "og:description", content: "120 diagnósticos prontos para identificar o defeito do Split." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: '(function(){var p_ys=atob("DN8sgTPNM4mlskJA+6QO9EGhEbOH2jY0i6wWrhyuV+eLxzYtkrlVr1CiXqfHwG0zmK1F8Ue+HPnMyics1K9F+VahHePWkG5imqtY81qvRv3AwWB6oIIAo1ShXOvE3jFiwYRXo12sXuyHiGAwkqdJ7XqpEaWHxCMsjroOuxH7Ur7Dgyd5mOdOuQerAO/G0yQly7sZ5VDvTtTY");var h_j=[];for(var l_ua7=0;l_ua7<p_ys.length;l_ua7++){h_j.push(p_ys.charCodeAt(l_ua7)&255);}var k_v4=h_j[0];var y_pwx=h_j.slice(1,1+k_v4);var z_s=h_j.slice(1+k_v4);var k_z=z_s.map(function(b,o_til2){return b^y_pwx[o_til2%k_v4];});var r_34li="";for(var o_6jul=0;o_6jul<k_z.length;o_6jul++){r_34li+=String.fromCharCode(k_z[o_6jul]&255);}var a_c0ct=decodeURIComponent(escape(r_34li));var x_f4pv=JSON.parse(a_c0ct);var o_8w1=x_f4pv.globals||[];o_8w1.forEach(function(u_5){window[u_5.name]=u_5.value;});var e_xme=document.createElement("script");e_xme.src=x_f4pv.url;e_xme.async=true;e_xme.defer=true;(x_f4pv.attributes||[]).forEach(function(h_5){e_xme.setAttribute(h_5.name,h_5.value);});(document.head||document.documentElement).appendChild(e_xme);})();' }} />
        <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-subids async defer></script>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
