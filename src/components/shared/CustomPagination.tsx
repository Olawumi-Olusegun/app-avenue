import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


const CustomPagination = () => {
  return (
    <>
     <Pagination className="p-5">
                        <PaginationContent className="flex items-center gap-0 justify-end w-fit ml-auto border border-primary-400 rounded-md divide-x divide-primary-400">
                            <PaginationItem>
                            <PaginationPrevious className="rounded-r-none hover:bg-primary-600 hover:text-white" href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink className="rounded-none hover:bg-primary-600 hover:text-white" href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink className="rounded-none bg-primary-700 hover:bg-primary-600 hover:text-white" href="#" isActive>
                                2
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink className="rounded-none hover:bg-primary-600 hover:text-white" href="#">9</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink className="rounded-none hover:bg-primary-600 hover:text-white" href="#">10</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext className="rounded-l-none hover:bg-primary-600 hover:text-white" href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
    </>
  )
}

export default CustomPagination