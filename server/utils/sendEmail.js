const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};




// 2nd code

//  var nodemailer = require("nodemailer");


//     var transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       //   service: process.env.SERVICE,
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: "garima19dec1996@gmail.com",
//         pass: "Garima@19Sharma",
//       },
//     });
	
// 	var mailOptions = {
//     from: "garima19dec1996@gmail.com",
//     to: "garima19dec1996@gmail.com",
//     subject: "demo mail",
//     text: "hey, you have received a mail",
//   };

// transporter.sendMail(mailOptions, function (error, info) {
// 	if (error) {
// 		console.log("email not sent!");
//    		console.log(error);
// 	}
// 	else {
// 		console.log("email sent successfully",info.response);
// 	}
// 	});
    


