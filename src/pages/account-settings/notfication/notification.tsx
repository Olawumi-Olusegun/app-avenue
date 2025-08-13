import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/components/shared/DashboardHeader";


const Notification = () => {


    return (
        <>
          <DashboardHeader>
             <h1 className="font-bold">Notifications</h1>
           </DashboardHeader>
        <div className="w-full flex flex-col gap-5 my-5">
            <section className="w-full my-2">
                <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                    <div className="col-span-12 lg:col-span-4">
                        <h1 className="text-white">Email Notifications</h1>
                        <span className="text-xs text-white/70">Control which updates you receive via email to your registered address</span>
                    </div>
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-4 w-full lg:max-w-[80%]">
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">App Verification Status Updates: (e.g., App Approved, Rejected, In Review).</Label>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">New App Reviews & Ratings</Label>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">Payout & Financial Updates: (e.g., Payout Initiated, Revenue Reports Available).</Label>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">Community Activity: (e.g., Replies to your forum posts, new feature suggestions).</Label>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">Platform Announcements & Policy Changes</Label>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Switch id="airplane-mode" className="self-start" />
                            <Label htmlFor="airplane-mode" className="text-sm">Product Updates & Promotions from AppAvenue</Label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Notification