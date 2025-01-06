import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDatasource } from '../infrastructure/datasources/mongo-log.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
// import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
// import { EmailService } from './email/email.service';
import { CronService } from './cron/cron-service';

const logRepository = new LogRepositoryImpl(
	// new FileSystemDatasource()
	new MongoLogDatasource()
);

// const emailService = new EmailService();

export class Server {
	public static start() {
		console.log('Server started...');

		// Mandar email

		// new SendEmailLogs(emailService, fileSystemLogRepository).execute([
		// 	'xh4rz98@gmail.com'
		// ]);

		// const emailService = new EmailService();

		// emailService.sendEmail({
		// 	to: 'xh4rz98@gmail.com',
		// 	subject: 'Logs de sistema',
		// 	htmlBody: `
		// 		<h3>Logs de sistema - NOC</h3>
		// 		<p>Lorem valit non veniam ullamco ex eu laborum</p>
		// 		<p>Ver los adjuntos</p>
		// 	`
		// });

		// emailService.sendEmailWithFileSystemLogs(['xh4rz98@gmail.com']);

		// CronService.createJob('*/5 * * * * *', () => {
		// 	const url = 'https://google.com';

		// 	new CheckService(
		// 		logRepository,
		// 		() => console.log(`${url} is ok`),
		// 		(error) => console.log(error)
		// 	).execute(url);
		// 	// new CheckService().execute('http://localhost:3000');
		// });
	}
}
