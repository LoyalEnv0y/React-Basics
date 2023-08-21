import Button from '../components/Button';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ButtonPage() {
	return (
		<div>
			<section className="flex w-full justify-evenly mb-2">
				<div>
					<Button
						primary
						onClick={() => console.log('Hello')}
						onMouseEnter={() => console.log('World')}
						className={'mb-3'}
					>
						<NotificationsActiveIcon /> Click
					</Button>
				</div>
				<div>
					<Button secondary>
						<CloudDownloadIcon /> Click
					</Button>
				</div>
				<div>
					<Button success>
						<SendIcon /> Click
					</Button>
				</div>
				<div>
					<Button warning>
						<ThumbUpIcon /> Click
					</Button>
				</div>
				<div>
					<Button danger>
						<FavoriteIcon /> Click
					</Button>
				</div>
			</section>

			<section className="flex w-full justify-evenly mb-2">
				<div>
					<Button primary rounded>
						Click
					</Button>
				</div>
				<div>
					<Button secondary rounded>
						Click
					</Button>
				</div>
				<div>
					<Button success rounded>
						Click
					</Button>
				</div>
				<div>
					<Button warning rounded>
						Click
					</Button>
				</div>
				<div>
					<Button danger rounded>
						Click
					</Button>
				</div>
			</section>

			<section className="flex w-full justify-evenly mb-2">
				<div>
					<Button primary outline>
						Click
					</Button>
				</div>
				<div>
					<Button secondary outline>
						Click
					</Button>
				</div>
				<div>
					<Button success outline>
						Click
					</Button>
				</div>
				<div>
					<Button warning outline>
						Click
					</Button>
				</div>
				<div>
					<Button danger outline>
						Click
					</Button>
				</div>
			</section>

			<section className="flex w-full justify-evenly mb-2">
				<div>
					<Button primary outline rounded>
						Click
					</Button>
				</div>
				<div>
					<Button secondary outline rounded>
						Click
					</Button>
				</div>
				<div>
					<Button success outline rounded>
						Click
					</Button>
				</div>
				<div>
					<Button warning outline rounded>
						Click
					</Button>
				</div>
				<div>
					<Button danger outline rounded>
						Click
					</Button>
				</div>
			</section>
		</div>
	);
}

export default ButtonPage;
