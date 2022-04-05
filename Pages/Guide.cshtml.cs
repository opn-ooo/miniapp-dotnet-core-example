using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace miniapp_dotnet_core_example.Pages;

public class GuideModel : PageModel
{
	private readonly ILogger<GuideModel> _logger;

	public GuideModel(ILogger<GuideModel> logger)
	{
		_logger = logger;
	}

	public void OnGet()
	{

	}
}
