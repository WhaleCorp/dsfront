import { DateTime } from "../Modules/DateTime";
import Header from "../Modules/Header";

export default function First() {
    return (
        <div className="flex flex-col bg-repeat bg-contain text-amber-200 w-full bg-[url('/public/wood.jpg')] py-5">
            <h1 className="text-center text-4xl mt-2">Header</h1>
            <div className="text-2xl mt-5 bg-amber-200 text-amber-900 ">
                <DateTime />
            </div>
            <div className="flex justify-around gap-4 px-5 my-5">
                <div className="w-full border-4 border-gray-600 rounded-t-3xl">
                    <div className="h-full">
                        <h1 className="text-center py-4 font-semibold text-3xl bg-amber-800 rounded-t-3xl">Header</h1>
                        <div className="h-full flex flex-col justify-around">
                            <div className="text-xl flex flex-col m-4 font-bold p-3 h-full">
                                <div className="flex w-full justify-around">
                                    <p className="text-amber-500">Title</p>
                                    <p className="text-amber-500">Time</p>
                                </div>
                                <div className="flex w-full justify-around">
                                    <p>Title</p>
                                    <p>Time</p>
                                </div>

                            </div>
                            <div className="text-2xl flex flex-col m-4 font-bold px-3 h-full">
                                <div className="flex w-full justify-around">
                                    <p className="text-amber-500">Title</p>
                                    <p className="text-amber-500">Time</p>
                                </div>
                                <div className="flex w-full justify-around">
                                    <p>Title</p>
                                    <p>Time</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] border-4 border-gray-600 rounded-t-3xl flex justify-around">
                    <img src="castle.jpg" className="rounded-t-3xl " />
                </div>
                <div className="w-full border-4 border-gray-600 rounded-t-3xl">
                    <div className="h-full">
                        <h1 className="text-center py-4 font-semibold text-3xl bg-amber-800 rounded-t-3xl">Header</h1>
                        <div className="h-full flex flex-col justify-around">
                            <div className="text-xl flex flex-col m-4 font-bold p-3 h-full">
                                <div className="flex w-full justify-around">
                                    <p className="text-amber-500">Title</p>
                                    <p className="text-amber-500">Time</p>
                                </div>
                                <div className="flex w-full justify-around">
                                    <p>Title</p>
                                    <p>Time</p>
                                </div>

                            </div>
                            <div className="text-2xl flex flex-col m-4 font-bold px-3 h-full">
                                <div className="flex w-full justify-around">
                                    <p className="text-amber-500">Title</p>
                                    <p className="text-amber-500">Time</p>
                                </div>
                                <div className="flex w-full justify-around">
                                    <p>Title</p>
                                    <p>Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 h-[1px] w-full border-amber-200"></div>
            <div className="mx-5 text-xl text-center">Text</div>
            <div className="border-2 h-[1px] w-full border-amber-200"></div>
        </div>
    )
}