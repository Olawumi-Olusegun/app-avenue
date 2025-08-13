import FeatureSuggestionForm from "@/components/modals/community/feature-suggestion-form"
import DashboardHeader from "@/components/shared/DashboardHeader"
import { Vote } from "lucide-react"

const FeatureSuggestions = () => {
    return (
        <>
         <DashboardHeader>
             <h1 className="font-bold">Featured Suggestions</h1>
           </DashboardHeader>
            <section className="w-full relative rounded-md overflow-hidden my-6 bg-[url('/assets/images/featured-suggestion-hero-bg.png')] bg-cover bg-center bg-no-repeat h-[237px] flex items-center justify-center">
                <div className="flex flex-col gap-2 w-full p-5 z-10">
                    <h1 className="text-white font-semibold text-2xl">Welcome to AppAvenue Developer Forum</h1>
                    <p className="text-white/80 text-sm">Have a great idea to make AppAvenue Developer better?</p>
                    <FeatureSuggestionForm />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black from-50% to-transparent"></div>
            </section>
            <section className="flex flex-col gap-5 w-full my-5">
                <h1 className="font-semibold text-white">Top Voted Suggestions</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-5">
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#9BF6534D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">API Access for Analytics and App Management</h2>
                        <p className="text-xs leading-4 line-clamp-6">Provide a public API that allows developers to programmatically access their analytics data and manage certain aspects of their app listings.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#22A5DE4D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Predictive Analytics and Recommendations</h2>
                        <p className="text-xs leading-4 line-clamp-6">Implement AI-powered features that provide insights and recommendations based on app performance data, such as predicting future revenue trends or suggesting optimization strategies.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#635AF34D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Bulk Actions for App Management</h2>
                        <p className="text-xs leading-4 line-clamp-6">Allow developers to perform actions on multiple apps simultaneously, such as updating pricing, unlisting, or managing release phases.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#442216]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Direct Communication Channel with App Review Team</h2>
                        <p className="text-xs leading-4 line-clamp-6">Provide a public API that allows developers to programmatically access their analytics data and manage certain aspects of their app listings.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#442216]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Real-time Collaboration in IDE</h2>
                        <p className="text-xs leading-4 line-clamp-6">Allow multiple developers on a team to simultaneously edit code within the in-browser IDE for faster teamwork and debugging.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#635AF34D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Automated A/B Testing for Store Listings</h2>
                        <p className="text-xs leading-4 line-clamp-6">Enable developers to easily A/B test different app titles, descriptions, screenshots, and videos on the app store pages to optimize conversion rates.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#9BF6534D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Advanced User Segmentation for Beta Testing</h2>
                        <p className="text-xs leading-4 line-clamp-6">Provide more granular options for segmenting beta testers based on demographics, device specifications, or usage patterns to gather more targeted feedback.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#22A5DE4D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Customizable Analytics Dashboards</h2>
                        <p className="text-xs leading-4 line-clamp-6">Allow developers to personalize their analytics dashboard by choosing which key metrics are displayed and arranging them according to their priorities.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#F7A4094D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Integrated Crash Reporting with Stack Traces</h2>
                        <p className="text-xs leading-4 line-clamp-6">Provide detailed crash reports with stack traces directly within the analytics section, making it easier to identify and debug app errors</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                    <button className="text-white p-3 text-start cursor-pointer hover:bg-primary-900 transition-colors duration-300 rounded-md border border-gray-600 flex flex-col gap-4 bg-gradient-to-b from-[#343A4000] to-[#BA4AEA4D]">
                        <Vote className="mt-5" />
                        <h2 className="font-semibold text-sm">Automated Localization Tools</h2>
                        <p className="text-xs leading-4 line-clamp-6">Integrate tools that assist with the localization process, such as suggesting translations, managing language files, and providing in-context previews</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold">by Marvin McKinney</span>
                            <span className="text-xs">2430 Votes</span>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}

export default FeatureSuggestions