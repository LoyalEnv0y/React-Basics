import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);
	const handleClick = () => {
		setShowModal(true);
	};
	const handleClose = () => {
		setShowModal(!showModal);
	};

	const actionBar = (
		<div className='flex justify-between'>
			<Button success rounded onClick={handleClose}>Agree</Button>
			<Button danger rounded onClick={handleClose}>Disagree</Button>
		</div>
	);
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);

	return (
		<>
			<div>
				<Button primary onClick={handleClick}>
					Open Modal
				</Button>
			</div>
			{showModal && modal}

			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nam adipisci exercitationem eos, perferendis vitae corrupti, tenetur placeat tempore beatae voluptate minus similique harum! Praesentium tempora pariatur beatae eum omnis.
			Deleniti rerum dicta inventore fugiat eligendi, debitis quae totam accusamus quos voluptatum soluta doloremque id sunt ea minus ducimus iure consequatur vel ratione culpa enim sit dolorem odio corporis. Ducimus.
			Culpa beatae impedit adipisci nesciunt sit dolorum tempora labore fuga? Facere ratione non dolor. Possimus expedita quia, nihil, ullam culpa beatae nostrum corrupti maiores natus temporibus atque officia est autem?
			Quo veniam provident reiciendis qui a quos, impedit consequuntur totam nemo perferendis excepturi, non similique molestiae, dignissimos esse ipsum maxime rerum fugit minima. Nihil voluptates recusandae quis deleniti illo expedita.
			Excepturi nemo modi, autem perspiciatis nihil quis laudantium! Dignissimos tenetur in fugiat, ex vitae quam illum illo quasi dolores quibusdam voluptas rerum, non et voluptatibus laboriosam veniam, pariatur dolorem similique?
			Mollitia sunt corrupti cupiditate magni laborum illum est temporibus a perspiciatis suscipit? Laboriosam delectus, et, saepe dignissimos qui asperiores sunt facilis, corporis dolore error iste velit iure similique eaque eum!
			Pariatur ipsum natus, error tempore dignissimos illo doloribus quas quam voluptatibus eveniet assumenda odit voluptatem ut recusandae! Modi repudiandae pariatur, asperiores sequi, tenetur ut perferendis accusamus, distinctio soluta ab facere!
			Quas voluptatum porro perferendis nostrum consectetur, ullam blanditiis dolorem? Eaque quod perferendis dolor autem quaerat minus at aliquid labore? Amet expedita perspiciatis earum, error officiis necessitatibus id totam eos. Provident.
			Vitae, odio. Id inventore nihil impedit nemo, soluta doloribus ad molestiae officia eius alias ab sed placeat asperiores, assumenda expedita commodi, perspiciatis non dolores! Quo debitis ipsum mollitia beatae! Soluta!
			Commodi, nesciunt odit, eligendi illo dolor repellendus debitis soluta maiores a nulla eveniet ex reiciendis cumque exercitationem at! Illum consequuntur culpa eaque? Iusto hic doloribus facere cumque deleniti voluptate ullam?
			Distinctio magnam explicabo sed necessitatibus, voluptates iusto debitis facilis placeat quidem sunt ad quia autem voluptate rerum modi quibusdam enim ducimus non quisquam deserunt ea! Aspernatur labore suscipit voluptate voluptatem.
			Optio repudiandae in provident consectetur aperiam! Quod voluptatibus molestias reiciendis dicta aliquid dolor, placeat iure id eius dolorum error odio asperiores pariatur ullam. Doloribus dicta itaque doloremque quo id nemo!
			Necessitatibus nemo natus officia qui beatae maxime eos? Molestias quam recusandae quibusdam ex id quos doloribus. Officia adipisci repellat sequi suscipit, soluta dolore sapiente accusantium nesciunt assumenda obcaecati quidem amet?
			Porro veritatis recusandae nostrum quia natus. Quis earum at odio. Repellat esse ab maxime inventore distinctio ipsam porro fuga fugit quam, voluptatibus dicta illum illo quae sit placeat. Ab, nisi.
			Enim provident, laborum beatae quas nisi possimus cum voluptates voluptate autem fuga culpa vero aliquid! Eius totam est magnam quidem nam dicta sunt odit maiores excepturi itaque. Sapiente, asperiores cumque.
			Nulla dolores nostrum culpa odit, impedit temporibus aperiam! Magni reiciendis perferendis eius, recusandae repudiandae, culpa dicta maiores optio officiis expedita eum reprehenderit iure veniam hic unde nobis fuga ea pariatur!
			Excepturi vero eos laborum, optio veniam aliquam ipsam reprehenderit autem pariatur asperiores libero dignissimos accusantium minus. Minus, voluptatem impedit assumenda sunt rem minima accusantium possimus dolores perferendis maiores ea praesentium.
			Neque atque laboriosam, velit voluptatum tenetur officia reiciendis laborum incidunt ratione a necessitatibus at eveniet culpa hic harum? Cumque corrupti, libero eveniet eaque minus reprehenderit porro ea saepe soluta quidem.
			Laudantium optio in quos minus perspiciatis est, fugiat non quisquam, tempore ullam quibusdam. Nulla, velit temporibus. Omnis veniam cupiditate, sequi harum aperiam officiis odio, expedita ipsum suscipit dolores adipisci vel?
			Eos molestias quibusdam fugiat adipisci magnam et, voluptas iusto dolorem earum esse labore minus iste vero tempora dolor vel similique quis qui asperiores illo voluptates libero quae sapiente? Harum, id!
			Placeat expedita, dolores aut harum facilis nesciunt minus earum nemo dignissimos aliquid deleniti facere enim voluptas magnam consequatur beatae voluptate qui assumenda quia maxime ut in recusandae amet! Dolor, eius!
			Laboriosam cum illum nihil eum rem voluptatem cumque deleniti maiores. Ipsum praesentium, quod ducimus quaerat voluptatum, quia tempora eveniet nisi itaque consequuntur accusamus quo exercitationem sint in unde, officiis magni.
			Illo quo eos accusamus. Possimus magni modi est! Ad vitae rem provident iure quis harum odit necessitatibus magni, mollitia tempore in, voluptatem aperiam, corrupti dolore atque. Saepe, pariatur quos. Voluptatibus.
			Praesentium quo libero provident modi, possimus iste magnam sint ex, velit consectetur nam, delectus blanditiis facilis neque animi in. Magnam provident natus ducimus dolores quo. Asperiores laborum dolores molestiae? Ipsum.
			Non excepturi perferendis saepe culpa consequuntur? Itaque, eaque exercitationem. Dignissimos distinctio delectus alias deleniti. Inventore fugiat placeat enim alias aut cum quibusdam assumenda, ullam officiis modi, doloribus quae, optio ipsam?
			Voluptas eligendi excepturi cupiditate maiores? Voluptas, iste culpa ab cumque et, quidem rem sunt amet illo excepturi blanditiis ea quis pariatur necessitatibus labore reiciendis eveniet? Repellendus libero modi in delectus.
			Similique in eaque exercitationem doloremque deserunt ut mollitia blanditiis necessitatibus officiis corrupti quo, illum enim sed ipsa recusandae obcaecati? Illum cum consequuntur inventore nostrum maxime a sapiente voluptas eum vitae.
			Dolorum ipsam mollitia repellendus necessitatibus quaerat saepe omnis sit in deserunt quam asperiores provident animi, totam expedita soluta? Voluptatem adipisci velit cumque sit et perferendis omnis labore minima consequatur ex.
			Inventore, hic placeat ullam error unde fugit fuga? Provident amet nam libero autem totam explicabo sequi commodi, quia nobis, rerum deleniti repellendus odit expedita obcaecati a eaque esse alias aperiam.
			Quae sequi repudiandae, fugiat maiores, sit error est officia tempore, aliquam asperiores consectetur ab libero vel porro fuga explicabo pariatur eaque excepturi nisi earum nihil. Aliquam quae ipsa blanditiis vitae?</p>
		</>
	);
}

export default ModalPage;
