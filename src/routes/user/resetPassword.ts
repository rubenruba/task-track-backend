import { Router } from "express";
import { Mailer } from "../../services/mail/Mailer";
import { Email } from "../../VO/Email";
import { Password } from "../../VO/Password";

export function resetPassword(router: Router) {
  router.post("/reset-password", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) throw new Error("Invalid request params");

      const randomPassword = Math.random().toString(36).substring(2, 8);
      Password.fromRaw(randomPassword);
      new Mailer(new Email(email).value).resetPassword(randomPassword);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });
}
