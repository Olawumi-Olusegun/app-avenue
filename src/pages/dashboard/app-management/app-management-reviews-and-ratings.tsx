import { Button } from "@/components/ui/button"
import { ArrowUp, Flag, Star } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import AppSubLinks from "./app-sublinks"

const AppManagementReviewsAndRatings = () => {
    return (
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <section className="w-full my-2">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 divide-x divide-gray-600 text-white">
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Active Beta Tests</span>
                        <span className="font-semibold text-xl">4</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Total Testers</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$5,869,123</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Feedbacks</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">867k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Star size={15} />
                                <span>5</span>
                            </div>
                            <div className="h-1 rounded-full bg-white w-[60%]"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Star size={15} />
                                <span>4</span>
                            </div>
                            <div className="h-1 rounded-full bg-white w-[100%]" ></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Star size={15} />
                                <span>3</span>
                            </div>
                            <div className="h-1 rounded-full bg-white w-[40%]"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Star size={15} />
                                <span>2</span>
                            </div>
                            <div className="h-1 rounded-full bg-white w-[10%]"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Star size={15} />
                                <span>1</span>
                            </div>
                            <div className="h-1 rounded-full bg-white w-[5%]"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between py-6">
                    <div className="relative w-full lg:w-fit">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sort By</SelectLabel>
                                    <SelectItem value="android">Android</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
                        <span className="text-sm">Create New Beta Test</span>
                    </Button>
                </div>
            </section>

            <section className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-3 p-6 bg-primary-500 rounded-md border border-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-white">Cameron Williamson</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                            </div>
                            <span className="text-xs text-white/70">21 Sep, 2020</span>
                        </div>
                    </div>
                    <p className="text-white text-sm">This browser is incredibly fast! Pages load quickly, and it doesn't hog my system resources. I also appreciate the clean and intuitive interface. A great alternative to the mainstream browsers.</p>
                    <div className="flex items-center justify-between">
                        <Button variant={"link"} className="text-amber-500 text-xs px-0">Reply</Button>
                        <Button variant={"link"} className="text-white text-xs px-0 gap-1 bg-none hover:bg-none">
                            <Flag size={15} />
                            Flag Review
                        </Button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 p-6 bg-primary-500 rounded-md border border-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-white">Jacob Jones</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400" />
                                <Star size={15} className="text-yellow-400" />
                                <Star size={15} className="text-yellow-400" />
                            </div>
                            <span className="text-xs text-white/70">21 Sep, 2020</span>
                        </div>
                    </div>
                    <p className="text-white text-sm">The lack of extension support is a major drawback. Many of my essential extensions are not available, which limits the functionality of this browser. It feels very basic compared to other options</p>
                    <div className="flex items-center justify-between">
                        <Button variant={"link"} className="text-amber-500 text-xs px-0">Reply</Button>
                        <Button variant={"link"} className="text-white text-xs px-0 gap-1 bg-none hover:bg-none">
                            <Flag size={15} />
                            Flag Review
                        </Button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 p-6 bg-primary-500 rounded-md border border-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-white">Floyd Miles</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                            </div>
                            <span className="text-xs text-white/70">21 Sep, 2020</span>
                        </div>
                    </div>
                    <p className="text-white text-sm">I love how much you can customize this browser. From the themes to the extensions, I can really make it my own. It's also very easy to use, even for someone who isn't super tech-savvy</p>
                    <div className="flex items-center justify-between">
                        <Button variant={"link"} className="text-amber-500 text-xs px-0">Reply</Button>
                        <Button variant={"link"} className="text-white text-xs px-0 gap-1 bg-none hover:bg-none">
                            <Flag size={15} />
                            Flag Review
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AppManagementReviewsAndRatings