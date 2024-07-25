import "react-chat-elements/dist/main.css"
import { Avatar, MessageList, MessageType} from "react-chat-elements"
import { randomString } from "utils/random_string";
import { FaCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { FC, useState } from "react";
import { useSession } from "api/actions/session";



type Props = {
	showChat: boolean;
	setShowChat: (showChat: boolean) => void;
};


const Chatbox: FC<Props> = ({showChat, setShowChat}) => {

	const {user} = useSession();

	const [messages, setMessages] = useState<MessageType[]>([]);


	const [text, setText] = useState<string>("");


	const handleSend = () => {
		const newMessage: MessageType = {
			position:"right",
			type:"text",
			title: user?.email || "Renter",
			text,
			id: randomString(5),
			focus:false,
			date: new Date(),
			titleColor: "blue",
			forwarded: false,
			replyButton: true,
			removeButton: true,
			status: "received",
			notch: true,
			retracted: false,
		}
		setMessages([...messages, newMessage]);
		setText("");
	}

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	}


  return (
	<main className=" fixed bottom-[25px] right-1 h-[500px] w-[400px] border border-solid bg-white shadow-lg">

	<section className="flex flex-row justify-between  border-gray-200 p-2">
		<div className="flex flex-row gap-3">
			<Avatar
				src="https://avatars.githubusercontent.com/u/80540635?v=4"
				alt="avatar"
				size="xlarge"
				type="rounded"
			/>
		<div>
			<p className="text-lg font-bold">Owner</p>
			<div className="flex flex-row items-center gap-1">
				<p className="text-sm">Offline</p>
				<FaCircle className="w-[10px] text-red-600" />
			</div>

		</div>
		</div>
		<button className="text-xl font-bold" onClick={() => setShowChat(!showChat)}><MdOutlineClose /></button>
	</section>

	<section className="flex h-[350px] flex-row justify-between border-b border-t-2 border-gray-200 p-2">
		<MessageList
			className='message-list w-full'
			lockable={true}
			toBottomHeight={'100%'}
			dataSource={messages}
			referance={null}
		/>
	</section>
	<section className="relative flex h-[80px] flex-row items-center pr-2">
		<textarea
			placeholder="Type here..."
			className="flex max-h-[70px] w-full flex-row items-center text-wrap rounded-md border-none outline-none focus:border-none focus:outline-none focus:ring-0"
			value={text}
			onChange={handleTextChange}
		/>
		<button 
			type="button"
			className="flex size-7 flex-row items-center justify-center rounded-full bg-blue-700 text-xl font-bold" 
			onClick={handleSend}>
			<IoMdSend  className="ml-1 text-white"/>
		</button>

	</section>

	</main>
  );
};

export default Chatbox;