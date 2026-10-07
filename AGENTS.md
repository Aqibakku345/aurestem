<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## AURESTEM architecture
- Keep shared brand navigation, footer, editorial modules and scientific illustrations in the aurestem component directory so all seven public pages use one visual system.
- Public content pages each own their route metadata; do not place page-specific social imagery in the root layout.
- Enquiries use a validated insert-only public server function with a private Cloud table, honeypot, bounded input, duplicate protection and email throttling; visitors must never read submitted personal data.
