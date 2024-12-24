// import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
// import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
// import { EmailService } from './email/email.service';

// const fileSystemLogRepository = new LogRepositoryImpl(
// 	new FileSystemDatasource()
// );

export class Server {
	public static start() {
		console.log('Server started...');

		// Mandar email
		// const emailService = new EmailService(fileSystemLogRepository);

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
		// 		fileSystemLogRepository,
		// 		() => console.log(`${url} is ok`),
		// 		(error) => console.log(error)
		// 	).execute(url);
		// 	// new CheckService().execute('http://localhost:3000');
		// });
	}
}
