import { UserDetails } from "@/models/User/types";

import { HeadTemplate } from "./Head";

export const NewAccountTemplate = (url: string, user: UserDetails) => {
  const { accountNumber, email, password, firstName, lastName } = user;

  return `
  <!DOCTYPE html>
  <html lang="en">
  ${HeadTemplate}
  </head>
  <body>
    <main>
      <section>
        <div class="content reset-password-content">
          <div class="card margin-bottom-md">
            <div class="logo">
              <img
                src="https://develop--capable-begonia-851edb.netlify.app/_next/image?url=%2Fimages%2Femail-logo.png&w=280&q=100"
                width="280px"
              />
            </div>

            <p class="txt-primary">
              Hello ${firstName} ${lastName},
              <br />
              <br />
              Your CARLISLE account was created.
              <br />
              <br />
              This email includes your account details,
              <span class="keep-it-safe">so please keep it safe!</span>
            </p>

            <div class="divider reset-password-divider"></div>

            <table width="100%">
              <tr>
                <td align="left">
                  <p class="txt-secondary">Account Number:</p>
                </td>
                <td align="right">
                  <p class="table-value">${accountNumber}</p>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <p class="txt-secondary">Email Address:</p>
                </td>
                <td align="right">
                  <p class="table-value">${email}</p>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <p class="txt-secondary">Current Password:</p>
                </td>
                <td align="right">
                  <p class="table-value">${password}</p>
                </td>
              </tr>
            </table>

            <p class="txt-primary margin-bottom-md">
              Please set a new password immediately before login.
            </p>

            <a href="${url}" class="btn-submit margin-bottom-md"
              >Set A New Password</a
            >

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
};
