const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('./config/keys');

passport.use(
	new GoogleStrategy({
		clientID: googleClientID,
		clientSecret: googleClientSecret,
		callbackURL: "/auth/google/callback"
	}, (accessToken, refreshToken, profile, done) => {
		
	})
);

app.get("/auth/google", passport.authenticate("google", {
		scope: ["profile", "email"]
	})
);

app.get("/auth/google/callback", passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
