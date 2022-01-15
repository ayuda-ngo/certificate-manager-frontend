import { getSession } from "next-auth/react";

// project imports
import { hashedPassword, verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }

  const session = await getSession({ req });

  if (!session || !session.user) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  const email = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({ email });

  if (!user) {
    res.statusCode = 404;
    res.end("User not found");
    return;
  }

  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Invalid password." });
    client.close();
    return;
  }

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: await hashedPassword(newPassword) } }
  );

  if (result.modifiedCount === 0) {
    res.status(500).json({ message: "Could not update password." });
    client.close();
    return;
  }

  client.close();
  res.status(200).json({ message: "Password updated." });
}
