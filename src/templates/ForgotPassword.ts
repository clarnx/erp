import { HeadTemplate } from "./Head";

export const ForgotPasswordTemplate = (url: string, email: string) => `
<!DOCTYPE html>
<html lang="en">
  ${HeadTemplate}
  <body>
    <main>
      <section>
        <div class="content forgot-password-content">
          <div class="card margin-bottom-md">
            <div class="logo">
              <img
                src="https://develop--capable-begonia-851edb.netlify.app/_next/image?url=%2Fimages%2Femail-logo.png&w=280&q=100"
                width="280px"
              />
            </div>

            <p class="txt-primary">
              Hello,
              <br />
              <br />
              We’ve received a request to reset the password for CARLISLE
              account associated with ${email}. No changes have been made
              to your account.
            </p>

            <div class="divider"></div>

            <p class="txt-secondary margin-bottom-md">
              You can reset your password by clicking the link below:
            </p>

            <a href="${url}" class="btn-submit margin-bottom-md">reset password</a>

            <p class="txt-secondary margin-bottom-md width-partial">
              If you did not request a new password, please contact Solution
              Center (<span>sc@carlisle-etcetera.com</span>) immediately.
            </p>

            <p class="txt-secondary">
              Thanks,
              <br />
              CARLISLE Team
            </p>
          </div>

          <div class="footer">
            <p>&copy;2022 CARLISLE ETCETERA LLC - All rights reserved</p>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
`;
