function ReviewPanel({
  analysis,
  reviewStatus,
  setReviewStatus,
  isEditing,
  setIsEditing,
}) {

  const handleApprove = () => {
    setReviewStatus("Approved");
    setIsEditing(false);
  };

  const handleEdit = () => {
    setReviewStatus("Editing");
    setIsEditing(true);
  };

  const handleSave = () => {
    setReviewStatus("Human Edited");
    setIsEditing(false);
  };

  const handleReject = () => {
    setReviewStatus("Rejected");
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Human Review
      </h2>

      <div className="mb-6">

        <span className="font-semibold">
          Status :
        </span>

        <span
          className={`ml-2 font-bold ${
            reviewStatus === "Approved"
              ? "text-green-600"
              : reviewStatus === "Rejected"
              ? "text-red-600"
              : reviewStatus === "Editing"
              ? "text-yellow-600"
              : reviewStatus === "Human Edited"
              ? "text-blue-600"
              : "text-gray-600"
          }`}
        >
          {reviewStatus}
        </span>

      </div>

      <div className="flex flex-wrap gap-4">

        <button
          disabled={!analysis || reviewStatus === "Approved"}
          onClick={handleApprove}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Approve
        </button>

        {!isEditing ? (
          <button
            disabled={!analysis || reviewStatus === "Approved"}
            onClick={handleEdit}
            className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>
        )}

        <button
          disabled={!analysis || reviewStatus === "Approved"}
          onClick={handleReject}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Reject
        </button>

      </div>

    </div>
  );
}

export default ReviewPanel;