import { Head } from "@inertiajs/react"

import { Separator } from "@/Components/ui/separator"
import { AddBookForm } from "@/Components/uploads/add-book-form"

const AddChapters = () => {
	return (
		<div className="space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">Add Chapter</h2>
				<p className="text-sm text-muted-foreground">
					Add a book to your collection.
				</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<AddBookForm />
			</div>
		</div>
	)
}

export default AddChapters
